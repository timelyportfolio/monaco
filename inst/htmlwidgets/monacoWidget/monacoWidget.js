var monacoWidget = {
  modelValue: "",
  themes: {
    Dark: {
      base: "hc-black",
      inherit: true,
      rules: [
        {
          background: "161920"
        },
        {
          fontStyle: "bold",
          token: "keyword"
        }
      ],
      colors: {
        "editorIndentGuide.background": "#ffffff50",
        "editorGutter.background": "#19197040"
      }
    },
    AllHallowsEve: {
      base: "vs-dark",
      inherit: true,
      rules: [
        {
          background: "000000",
          token: ""
        },
        {
          foreground: "ffffff",
          background: "434242",
          token: "text"
        },
        {
          foreground: "ffffff",
          background: "000000",
          token: "source"
        },
        {
          foreground: "9933cc",
          token: "comment"
        },
        {
          foreground: "3387cc",
          token: "constant"
        },
        {
          foreground: "cc7833",
          token: "keyword"
        },
        {
          foreground: "d0d0ff",
          token: "meta.preprocessor.c"
        },
        {
          fontStyle: "italic",
          token: "variable.parameter"
        },
        {
          foreground: "ffffff",
          background: "9b9b9b",
          token: "source comment.block"
        },
        {
          foreground: "66cc33",
          token: "string"
        },
        {
          foreground: "aaaaaa",
          token: "string constant.character.escape"
        },
        {
          foreground: "000000",
          background: "cccc33",
          token: "string.interpolated"
        },
        {
          foreground: "cccc33",
          token: "string.regexp"
        },
        {
          foreground: "cccc33",
          token: "string.literal"
        },
        {
          foreground: "555555",
          token: "string.interpolated constant.character.escape"
        },
        {
          fontStyle: "underline",
          token: "entity.name.type"
        },
        {
          fontStyle: "italic underline",
          token: "entity.other.inherited-class"
        },
        {
          fontStyle: "underline",
          token: "entity.name.tag"
        },
        {
          foreground: "c83730",
          token: "support.function"
        },
        {
          foreground: "FFA500",
          token: "delimiter"
        },
        {
          foreground: "FFA500",
          token: "delimiter.html"
        }
      ],
      colors: {
        "editor.foreground": "#FFFFFF",
        "editor.background": "#000000",
        "editor.selectionBackground": "#73597EE0",
        "editor.lineHighlightBackground": "#333300",
        "editorCursor.foreground": "#FFFFFF",
        "editorWhitespace.foreground": "#404040",
        "editorIndentGuide.background": "#ffffff50",
        "editorGutter.background": "#19197040"
      }
    },
    Merbivore: {
      base: "vs-dark",
      inherit: true,
      rules: [
        {
          background: "161616",
          token: ""
        },
        {
          foreground: "ad2ea4",
          fontStyle: "italic",
          token: "comment"
        },
        {
          foreground: "fc6f09",
          token: "keyword"
        },
        {
          foreground: "fc6f09",
          token: "storage"
        },
        {
          foreground: "fc83ff",
          token: "entity.other.inherited-class"
        },
        {
          foreground: "58c554",
          token: "constant.numeric"
        },
        {
          foreground: "1edafb",
          token: "constant"
        },
        {
          foreground: "8dff0a",
          token: "constant.library"
        },
        {
          foreground: "fc6f09",
          token: "support.function"
        },
        {
          foreground: "fdc251",
          token: "constant.language"
        },
        {
          foreground: "8dff0a",
          token: "string"
        },
        {
          foreground: "1edafb",
          token: "support.type"
        },
        {
          foreground: "8dff0a",
          token: "support.constant"
        },
        {
          foreground: "fc6f09",
          token: "meta.tag"
        },
        {
          foreground: "fc6f09",
          token: "declaration.tag"
        },
        {
          foreground: "fc6f09",
          token: "entity.name.tag"
        },
        {
          foreground: "ffff89",
          token: "entity.other.attribute-name"
        },
        {
          foreground: "ffffff",
          background: "990000",
          token: "invalid"
        },
        {
          foreground: "519f50",
          token: "constant.character.escaped"
        },
        {
          foreground: "519f50",
          token: "constant.character.escape"
        },
        {
          foreground: "519f50",
          token: "string source"
        },
        {
          foreground: "519f50",
          token: "string source.ruby"
        },
        {
          foreground: "e6e1dc",
          background: "144212",
          token: "markup.inserted"
        },
        {
          foreground: "e6e1dc",
          background: "660000",
          token: "markup.deleted"
        },
        {
          background: "2f33ab",
          token: "meta.diff.header"
        },
        {
          background: "2f33ab",
          token: "meta.separator.diff"
        },
        {
          background: "2f33ab",
          token: "meta.diff.index"
        },
        {
          background: "2f33ab",
          token: "meta.diff.range"
        },
        {
          foreground: "FFD700",
          token: "delimiter"
        },
        {
          foreground: "FFD700",
          token: "delimiter.html"
        }
      ],
      colors: {
        "editor.foreground": "#E6E1DC",
        "editor.background": "#161616",
        "editor.selectionBackground": "#454545",
        "editor.lineHighlightBackground": "#333435",
        "editorCursor.foreground": "#FFFFFF",
        "editorWhitespace.foreground": "#404040",
        "editorIndentGuide.background": "#ffffff50",
        "editorGutter.background": "#19197040"
      }
    },
    VibrantInk: {
      base: "vs-dark",
      inherit: true,
      rules: [
        {
          background: "000000",
          token: ""
        },
        {
          foreground: "ffffff",
          background: "0f0f0f",
          token: "text"
        },
        {
          background: "000000",
          token: "source.ruby.rails.embedded.html"
        },
        {
          foreground: "ffffff",
          background: "101010",
          token: "text.html.ruby"
        },
        {
          foreground: "ccff33",
          token: "constant.numeric.ruby"
        },
        {
          foreground: "ffffff",
          background: "000000",
          token: "source"
        },
        {
          foreground: "9933cc",
          token: "comment"
        },
        {
          foreground: "339999",
          token: "constant"
        },
        {
          foreground: "ff6600",
          token: "keyword"
        },
        {
          foreground: "edf8f9",
          token: "keyword.preprocessor"
        },
        {
          foreground: "ffffff",
          token: "keyword.preprocessor directive"
        },
        {
          foreground: "ffcc00",
          token: "entity.name.function"
        },
        {
          foreground: "ffcc00",
          token: "storage.type.function.js"
        },
        {
          fontStyle: "italic",
          token: "variable.parameter"
        },
        {
          foreground: "772cb7",
          background: "070707",
          token: "source comment.block"
        },
        {
          foreground: "ffffff",
          token: "variable.other"
        },
        {
          foreground: "999966",
          token: "support.function.activerecord.rails"
        },
        {
          foreground: "66ff00",
          token: "string"
        },
        {
          foreground: "aaaaaa",
          token: "string constant.character.escape"
        },
        {
          foreground: "000000",
          background: "cccc33",
          token: "string.interpolated"
        },
        {
          foreground: "44b4cc",
          token: "string.regexp"
        },
        {
          foreground: "cccc33",
          token: "string.literal"
        },
        {
          foreground: "555555",
          token: "string.interpolated constant.character.escape"
        },
        {
          fontStyle: "underline",
          token: "entity.name.class"
        },
        {
          fontStyle: "underline",
          token: "support.class.js"
        },
        {
          fontStyle: "italic underline",
          token: "entity.other.inherited-class"
        },
        {
          foreground: "ff6600",
          token: "meta.tag.inline.any.html"
        },
        {
          foreground: "ff6600",
          token: "meta.tag.block.any.html"
        },
        {
          foreground: "99cc99",
          fontStyle: "italic",
          token: "entity.other.attribute-name"
        },
        {
          foreground: "dde93d",
          token: "keyword.other"
        },
        {
          foreground: "ff6600",
          token: "meta.selector.css"
        },
        {
          foreground: "ff6600",
          token: "entity.other.attribute-name.pseudo-class.css"
        },
        {
          foreground: "ff6600",
          token: "entity.name.tag.wildcard.css"
        },
        {
          foreground: "ff6600",
          token: "entity.other.attribute-name.id.css"
        },
        {
          foreground: "ff6600",
          token: "entity.other.attribute-name.class.css"
        },
        {
          foreground: "999966",
          token: "support.type.property-name.css"
        },
        {
          foreground: "ffffff",
          token: "keyword.other.unit.css"
        },
        {
          foreground: "ffffff",
          token: "constant.other.rgb-value.css"
        },
        {
          foreground: "ffffff",
          token: "constant.numeric.css"
        },
        {
          foreground: "ffffff",
          token: "support.function.event-handler.js"
        },
        {
          foreground: "ffffff",
          token: "keyword.operator.js"
        },
        {
          foreground: "cccc66",
          token: "keyword.control.js"
        },
        {
          foreground: "ffffff",
          token: "support.class.prototype.js"
        },
        {
          foreground: "ff6600",
          token: "object.property.function.prototype.js"
        },
        {
          foreground: "FFBF00",
          token: "delimiter"
        },
        {
          foreground: "FFBF00",
          token: "delimiter.html"
        }
      ],
      colors: {
        "editor.foreground": "#FFFFFF",
        "editor.background": "#000000",
        "editor.selectionBackground": "#35493CE0",
        "editor.lineHighlightBackground": "#333300",
        "editorCursor.foreground": "#FFFFFF",
        "editorWhitespace.foreground": "#404040",
        "editorIndentGuide.background": "#ffffff50",
        "editorGutter.background": "#19197040"
      }
    }
  }, // end of 'themes'
  // functions
  utf8_to_base64: function (str) {
    // https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
    return btoa(unescape(encodeURIComponent(str)));
  },
  prettify: function (code, parser, tabSize) {
    var prettyCode = null, error = null;
    try {
      prettyCode = prettier.format(code, {
        parser: parser,
        plugins: prettierPlugins,
        trailingComma: "none",
        tabWidth: tabSize
      });
      editor.setValue(prettyCode); // non, faire ça dans prettifier action
    } catch (err) {
      error = err.message;
      // TODO: sweetalert - non, dans prettifier
    }
  },
  // end of functions
  actions: {
    prettifier: function (language, tabSize, label) {
      if (typeof label === "undefined") {
        label = "Prettify";
      }
      var parser;
      switch(language) {
        case "css":
          parser = "css";
          break;
        case "html":
          parser = "html";
          break;
        case "javascript":
          parser = "babel";
          break;
        case "scss":
          parser = "css";
          break;
      }
      return {
        id: "prettifier",
        label: label,
        precondition: null,
        keybindingContext: null,
        contextMenuGroupId: "navigation",
        contextMenuOrder: 1.5,
        run: function (ed) {
          var bookmark = false; //$("#bookmark").prop("checked");
          if (bookmark) {
            monacoWidget.modelValue = ed.getValue();
          }
          var result = prettify(ed.getValue(), parser);
          if(result.error === null){
            ed.setValue(result.prettyCode);
          }else{
            // sweetalert
          }
          return null;
        }
      };
    }
  } // end of 'actions'
};