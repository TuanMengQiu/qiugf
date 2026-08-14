<?php
// Check if file upload is attempted
if ($_FILES && isset($_FILES['uploaded_file']) && $_FILES['uploaded_file']['error'] === UPLOAD_ERR_OK) {
    // Define the path to README.md file
    $readme_file = 'README.md';

    // Get uploaded file details
    $uploaded_file_name = $_FILES['uploaded_file']['name'];
    $uploaded_file_tmp = $_FILES['uploaded_file']['tmp_name'];
    $uploaded_file_extension = strtolower(pathinfo($uploaded_file_name, PATHINFO_EXTENSION));

    // Allowed file extensions for README.md
    $allowed_extensions = array('txt', 'md',"html");

    // Allowed file extensions for images
    $allowed_image_extensions = array('png', 'jpg', 'jpeg', 'gif',"bmp","psd","ai");

    // Allowed file extensions for compressed files
    $allowed_archive_extensions = array('zip', 'rar', '7z',"gz","xz","zipx","zpaq");
    
    $allowed_swdt_extensions = array('xmind');
    
    $allowed_lua_extensions = array('lua',"qiulua");
    
    $allowed_model_extensions = array('obj',"omod","max","fbx","blend");
    // Check if the uploaded file is an image
    if (in_array($uploaded_file_extension, $allowed_image_extensions)) {
        // Define the directory where images will be stored
        $image_directory = 'img/';

        // Move the uploaded image file to the img directory
        $destination = $image_directory . $uploaded_file_name;
        
        if (move_uploaded_file($uploaded_file_tmp, $destination)) {
            echo "文件上传成功";

            // Redirect to a specific URL after successful upload
            header('Location: https://www.tuanmengqiu.cn/kfz/#/upload/');
            exit;
        } else {
            echo "文件上传失败";
        }
    } elseif (in_array($uploaded_file_extension, $allowed_archive_extensions)) {
        // Define the directory where archives will be stored
        $archive_directory = 'ysb/';

        // Move the uploaded archive file to the archive directory
        $destination = $archive_directory . $uploaded_file_name;
        
        if (move_uploaded_file($uploaded_file_tmp, $destination)) {
            echo "压缩包上传成功";

            // Redirect to a specific URL after successful upload
            header('Location: https://www.tuanmengqiu.cn/kfz/#/upload/');
            exit;
        } else {
            echo "压缩包上传失败";
        }

    } elseif (in_array($uploaded_file_extension, $allowed_swdt_extensions)) {
        // Define the directory where archives will be stored
        $swdt_directory = 'xmind/';

        // Move the uploaded swdt file to the swdt directory
        $destination = $swdt_directory . $uploaded_file_name;
        
        if (move_uploaded_file($uploaded_file_tmp, $destination)) {
            echo "思维导图上传成功";

            // Redirect to a specific URL after successful upload
            header('Location: https://www.tuanmengqiu.cn/kfz/#/upload/');
            exit;
        } else {
            echo "思维导图上传失败";
        }
        
    } elseif (in_array($uploaded_file_extension, $allowed_lua_extensions)) {
        // Define the directory where archives will be stored
        $lua_directory = 'lua/';

        // Move the uploaded swdt file to the swdt directory
        $destination = $lua_directory . $uploaded_file_name;
        
        if (move_uploaded_file($uploaded_file_tmp, $destination)) {
            echo "Lua上传成功";

            // Redirect to a specific URL after successful upload
            header('Location: https://www.tuanmengqiu.cn/kfz/#/upload/');
            exit;
        } else {
            echo "Lua上传失败";
        }
        
    } elseif (in_array($uploaded_file_extension, $allowed_model_extensions)) {
        // Define the directory where archives will be stored
        $model_directory = 'model/';

        // Move the uploaded swdt file to the swdt directory
        $destination = $model_directory . $uploaded_file_name;
        
        if (move_uploaded_file($uploaded_file_tmp, $destination)) {
            echo "模型上传成功";

            // Redirect to a specific URL after successful upload
            header('Location: https://www.tuanmengqiu.cn/kfz/#/upload/');
            exit;
        } else {
            echo "模型上传失败";
        }
        
    } else {
        // Validate file type for README.md
        if (!in_array($uploaded_file_extension, $allowed_extensions)) {
            die("只允许上传 .txt, .md, .zip, .rar, .7z 格式的文件。");
        }

        // Read uploaded file content
        $uploaded_file_content = file_get_contents($uploaded_file_tmp);

        // Open README.md file to append content
        $readme_handle = fopen($readme_file, 'a');

        if ($readme_handle) {
            // Write uploaded file content to README.md
            // fwrite($readme_handle, "### Uploaded File: $uploaded_file_name\n\n");
            fwrite($readme_handle, "$uploaded_file_content\n\n");

            // Close README.md file
            fclose($readme_handle);

            // Output success message
            echo "文件上传成功";

            // Redirect to a specific URL after successful upload
            header('Location: https://www.tuanmengqiu.cn/kfz/#/upload/');
            exit;
        } else {
            echo "找不到服务器内容";
        }
    }
} else {
    echo "文件上传失败或未选择文件。";
    header('Location: https://www.tuanmengqiu.cn/kfz/upload/');
}
?>
