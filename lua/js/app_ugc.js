// 菜单交互相关的主要功能实现
class EditorUI {
    constructor() {
        this.initMenus();
        this.bindEvents();
        this.initEditor();
        this.initContextMenu();
    }

    initEditor() {
        this.editor = document.getElementById('codeEditor');
    }
    initMenus() {
        // 初始化所有菜单项
        this.menuItems = {
            file: {
                btn: document.getElementById('fileBtn'),
                inner: document.getElementById('fileBtnInner')
            },
            idlib: {
                btn: document.getElementById('idlibBtn'),
                inner: document.getElementById('idlibInner')
            },
            insert: {
                btn: document.getElementById('insertBtn'),
                inner: document.getElementById('insertInner')
            },
            //字体
            font: {
                btn: document.getElementById('fontBtn'),
                inner: document.getElementById('fontInner')
            },
            //主题
            theme: {
                btn: document.getElementById('themeBtn'),
                inner: document.getElementById('themeInner')
            },
            help: {
                btn: document.getElementById('helpBtn'),
                inner: document.getElementById('helpInner')
            },
            debug: {
                btn: document.getElementById('debugBtn'),
                inner: document.getElementById('debugInner')
            }
        };	
    }


    bindEvents() {
        // 绑定菜单点击事件
        Object.keys(this.menuItems).forEach(key => {
            const item = this.menuItems[key];
            // 将点击事件改为鼠标进入/离开事件
            item.btn.addEventListener('click', () => this.openMenu(key));
            // item.btn.addEventListener('mouseleave', () => this.closeMenu());
            
            // 为inner内的所有li元素添加点击事件
            const liElements = item.inner.querySelectorAll('li');
            liElements.forEach(li => {
                li.addEventListener('click', () => {
                    item.inner.style.display = 'none';
                    const idAttr = li.getAttribute('data-type');
                    // 将字符串转换为数字，如果转换失败则返回0
                    const id = idAttr ? Number(idAttr) : 0;
                    
                    // 确保id是有效的正整数
                    if (id > 0 && Number.isInteger(id)) {
                        console.log('处理ID:', id);
                        window.NativeOpenIDLibrary && window.NativeOpenIDLibrary(id);
                    }
                    else if (key == "font") {
                        const fontSize = li.getAttribute('data-size');
                        this.editor.style.fontSize = fontSize;
                    }
                    else if (key == "theme") {
             
                    }
                });
            });
        });
    }

    openMenu(menuKey) {
        const menu = this.menuItems[menuKey];
        const isVisible = menu.inner.style.display !== 'none';
        // 关闭其他所有菜单
        Object.keys(this.menuItems).forEach(key => {
            if (key !== menuKey) {
                this.menuItems[key].inner.style.display = 'none';
            }
        });
        // 切换当前菜单
        menu.inner.style.display = isVisible ? 'none' : 'block';
    }
    closeMenu() {
        // 关闭其他所有菜单
        Object.keys(this.menuItems).forEach(key => {
            this.menuItems[key].inner.style.display = 'none';
        });
    }

    toggleWiki() {
        const isVisible = this.wiki.container.style.display !== 'none';
        this.wiki.container.style.display = isVisible ? 'none' : 'block';
        this.wiki.mask.style.display = isVisible ? 'none' : 'block';
    }

    initContextMenu() {
        // 创建右键菜单
        const contextMenu = document.createElement('div');
        contextMenu.className = 'context-menu';
        contextMenu.innerHTML = `
            <ul>
                <li data-action="copy">复制</li>
                <li data-action="paste">粘贴</li>
                <li data-action="cut">剪切</li>
                <li class="divider"></li>
                <li data-action="selectAll">全选</li>
                <li class="divider"></li>
                <li data-action="insertCode">插入代码</li>
            </ul>
        `;
        document.body.appendChild(contextMenu);

        // 编辑器右键事件
        this.editor.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            contextMenu.style.display = 'block';
            contextMenu.style.left = `${e.pageX}px`;
            contextMenu.style.top = `${e.pageY}px`;
        });

        // 点击菜单项处理
        contextMenu.addEventListener('click', (e) => {
            const action = e.target.getAttribute('data-action');
            switch(action) {
                case 'copy':
                    this.editor.getAction('editor.action.clipboardCopyAction').run();
                    break;
                case 'paste':
                    this.editor.getAction('editor.action.clipboardPasteAction').run();
                    break;
                case 'cut':
                    this.editor.getAction('editor.action.clipboardCutAction').run();
                    break;
                case 'selectAll':
                    this.editor.getAction('editor.action.selectAll').run();
                    break;
                case 'insertCode':
                    this.insertCodeAtCursor('// 在这里输入代码\n');
                    break;
            }
            contextMenu.style.display = 'none';
        });

        // 点击其他区域关闭菜单
        document.addEventListener('click', () => {
            contextMenu.style.display = 'none';
        });
    }

    // 在光标位置插入代码
    insertCodeAtCursor(code) {
        const selection = this.editor.getSelection();
        const id = { major: 1, minor: 1 };             
        const op = {
            identifier: id,
            range: selection,
            text: code,
            forceMoveMarkers: true
        };
        this.editor.executeEdits("my-source", [op]);
        this.editor.focus();
    }
}


// 初始化
document.addEventListener('DOMContentLoaded', () => {
    const editorUI = new EditorUI();
    const ze = editorUI.editor;
    Ue = 0,
	Ke = 0;
    window.InitEditorContent = function() {
		if (window.NativeGetScript && (ze.setValue(window.NativeGetScript()), ze.clearSelection(), ze.getSession().setUndoManager(new r.a.UndoManager)), window.NativeGetCursor) {
			var e = window.NativeGetCursor(),
			t = Pe(e ? e.split(",") : [], 2),
			i = t[0];
			Ue = void 0 === i ? 0 : i;
			var n = t[1];
			Ke = void 0 === n ? 0 : n,
			window.JsSetCursorPosition(Ue, Ke)
		}
	},
	window.JsGetScriptContent = function() {
		return ze.getValue()
	},
	window.JsSetScriptContent = function(e) {
		ze.setValue(e),
		ze.clearSelection()
	},
	window.JsGetCursorPosition = function() {
		var e = ze.getCursorPosition();
		return [e.row, e.column].join(",")
	},
	window.JsSetCursorPosition = function(e, t) {
		ze.focus(),
		ze.moveCursorTo(e, t),
		ze.clearSelection()
	},
	window.JsInsertId = function(e) {
		ze.insert(String(e)),
		ze.focus()
	},
	document.addEventListener("DOMContentLoaded", (function() {
		window.InitEditorContent(),
		ee(),
		le(),
		ye(),
		Re(),
		Ie(),
		De()
	}), !1),
	window.addEventListener("resize", (function() {
		ze.resize()
	}), !1),
	window.addEventListener("load", (function() {
		// ze.scrollToRow(Ue)
	}), !1)

});