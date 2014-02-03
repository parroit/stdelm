/*
 * stdelm
 * https://github.com/parroit/stdelm
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';
(function(globals, exports) {
    

    var  Keys = {
        DOM_VK_RETURN: 13,
        DOM_VK_TAB: 9
    },


    numericKeypadKeyCodes = [
         0x6D, //DOM_VK_SUBTRACT (109)  "-" on the numeric keypad.
          0x6E, //DOM_VK_DECIMAL (110)  Decimal point on the numeric keypad.
           0x6F, //DOM_VK_DIVIDE (111)  "/" on the numeric keypad.
          0x60, //DOM_VK_NUMPAD0 (96)   "0" on the numeric keypad.
          0x61, //DOM_VK_NUMPAD1 (97)   "1" on the numeric keypad.
          0x62, //DOM_VK_NUMPAD2 (98)   "2" on the numeric keypad.
          0x63, //DOM_VK_NUMPAD3 (99)   "3" on the numeric keypad.
          0x64, //DOM_VK_NUMPAD4 (100)  "4" on the numeric keypad.
          0x65, //DOM_VK_NUMPAD5 (101)  "5" on the numeric keypad.
          0x66, //DOM_VK_NUMPAD6 (102)  "6" on the numeric keypad.
          0x67, //DOM_VK_NUMPAD7 (103)  "7" on the numeric keypad.
          0x68, //DOM_VK_NUMPAD8 (104)  "8" on the numeric keypad.
          0x69, //DOM_VK_NUMPAD9 (105)  "9" on the numeric keypad.
         0x6A, //DOM_VK_MULTIPLY (106)  "*" on the numeric keypad.
         0x6B //DOM_VK_ADD (107)  "+" on the numeric keypad.
    ],

        nonPrintableKeyCodes = [
               0x03, //DOM_VK_CANCEL (3)    Cancel key.
             0x06, //DOM_VK_HELP (6)    Help key.
               0x08, //DOM_VK_BACK_SPACE (8)    Backspace key.
              0x09, //DOM_VK_TAB (9)    Tab key.
                0x0C, //DOM_VK_CLEAR (12)   "5" key on Numpad when NumLock is unlocked. Or on Mac, clear key which is positioned at NumLock key.
               0x0D, //DOM_VK_RETURN (13)   Return/enter key on the main keyboard.
                0x0E, //DOM_VK_ENTER (14)   Reserved, but not used.
                0x10, //DOM_VK_SHIFT (16)   Shift key.
              0x11, //DOM_VK_CONTROL (17)   Control key.
              0x12, //DOM_VK_ALT (18)   Alt (Option on Mac) key.
                0x13, //DOM_VK_PAUSE (19)   Pause key.
                0x14, //DOM_VK_CAPS_LOCK (20)   Caps lock.
             0x15, //DOM_VK_KANA (21)   Linux support for this keycode was added in Gecko 4.0.
               0x15, //DOM_VK_HANGUL (21)   Linux support for this keycode was added in Gecko 4.0.
                0x17, //DOM_VK_JUNJA (23)   Linux support for this keycode was added in Gecko 4.0.
                0x18, //DOM_VK_FINAL (24)   Linux support for this keycode was added in Gecko 4.0.
                0x19, //DOM_VK_HANJA (25)   Linux support for this keycode was added in Gecko 4.0.
                0x19, //DOM_VK_KANJI (25)   Linux support for this keycode was added in Gecko 4.0.
               0x1B, //DOM_VK_ESCAPE (27)   Escape key.
              0x1C, //DOM_VK_CONVERT (28)   Linux support for this keycode was added in Gecko 4.0.
               0x1D, //DOM_VK_NONCONVERT (29)   Linux support for this keycode was added in Gecko 4.0.
               0x1E, //DOM_VK_ACCEPT (30)   Linux support for this keycode was added in Gecko 4.0.
               0x1F, //DOM_VK_MODECHANGE (31)   Linux support for this keycode was added in Gecko 4.0.
                0x20, //DOM_VK_SPACE (32)   Space bar.
              0x21, //DOM_VK_PAGE_UP (33)   Page Up key.
                0x22, //DOM_VK_PAGE_DOWN (34)   Page Down key.
              0x23, //DOM_VK_END (35)   End key.
             0x24, //DOM_VK_HOME (36)   Home key.
             0x25, //DOM_VK_LEFT (37)   Left arrow.
               0x26, //DOM_VK_UP (38)   Up arrow.
                0x27, //DOM_VK_RIGHT (39)   Right arrow.
             0x28, //DOM_VK_DOWN (40)   Down arrow.
               0x29, //DOM_VK_SELECT (41)   Linux support for this keycode was added in Gecko 4.0.
                0x2A, //DOM_VK_PRINT (42)   Linux support for this keycode was added in Gecko 4.0.
              0x2B, //DOM_VK_EXECUTE (43)   Linux support for this keycode was added in Gecko 4.0.
              0x2C, //DOM_VK_PRINTSCREEN (44)   Print Screen key.
               0x2D, //DOM_VK_INSERT (45)   Ins(ert) key.
            0x2E, //DOM_VK_DELETE: //
              0x5B, //DOM_VK_WIN (91)   Windows logo key on Windows. Or Super or Hyper key on Linux.
             0x5D, //DOM_VK_CONTEXT_MENU (93)   Opening context menu key.
                0x5F, //DOM_VK_SLEEP (95)   Linux support for this keycode was added in Gecko 4.0.
                0x6C, //DOM_VK_SEPARATOR (108)   
               0x70, //DOM_VK_F1 (112)  F1 key.
               0x71, //DOM_VK_F2 (113)  F2 key.
               0x72, //DOM_VK_F3 (114)  F3 key.
               0x73, //DOM_VK_F4 (115)  F4 key.
               0x74, //DOM_VK_F5 (116)  F5 key.
               0x75, //DOM_VK_F6 (117)  F6 key.
               0x76, //DOM_VK_F7 (118)  F7 key.
               0x77, //DOM_VK_F8 (119)  F8 key.
               0x78, //DOM_VK_F9 (120)  F9 key.
              0x79, //DOM_VK_F10 (121)  F10 key.
              0x7A, //DOM_VK_F11 (122)  F11 key.
              0x7B, //DOM_VK_F12 (123)  F12 key.
              0x7C, //DOM_VK_F13 (124)  F13 key.
              0x7D, //DOM_VK_F14 (125)  F14 key.
              0x7E, //DOM_VK_F15 (126)  F15 key.
              0x7F, //DOM_VK_F16 (127)  F16 key.
              0x80, //DOM_VK_F17 (128)  F17 key.
              0x81, //DOM_VK_F18 (129)  F18 key.
              0x82, //DOM_VK_F19 (130)  F19 key.
              0x83, //DOM_VK_F20 (131)  F20 key.
              0x84, //DOM_VK_F21 (132)  F21 key.
              0x85, //DOM_VK_F22 (133)  F22 key.
              0x86, //DOM_VK_F23 (134)  F23 key.
              0x87, //DOM_VK_F24 (135)  F24 key.
             0x90, //DOM_VK_NUM_LOCK (144)  Num Lock key.
              0x91, //DOM_VK_SCROLL_LOCK (145)  Scroll Lock key.
             0x92, //DOM_VK_WIN_OEM_FJ_JISHO (146)  An OEM specific key on Windows. This was used for "Dictionary" key on Fujitsu OASYS. Requires Gecko 21.0
               0x93, //DOM_VK_WIN_OEM_FJ_MASSHOU (147)  An OEM specific key on Windows. This was used for "Unregister word" key on Fujitsu OASYS. Requires Gecko 21.0
               0x94, //DOM_VK_WIN_OEM_FJ_TOUROKU (148)  An OEM specific key on Windows. This was used for "Register word" key on Fujitsu OASYS. Requires Gecko 21.0
              0x95, //DOM_VK_WIN_OEM_FJ_LOYA (149)  An OEM specific key on Windows. This was used for "Left OYAYUBI" key on Fujitsu OASYS. Requires Gecko 21.0
              0x96, //DOM_VK_WIN_OEM_FJ_ROYA (150)  An OEM specific key on Windows. This was used for "Right OYAYUBI" key on Fujitsu OASYS. Requires Gecko 21.0
              0xB5, //DOM_VK_VOLUME_MUTE (181)  Audio mute key. Requires Gecko 21.0
              0xB6, //DOM_VK_VOLUME_DOWN (182)  Audio volume down key Requires Gecko 21.0
                0xB7, //DOM_VK_VOLUME_UP (183)  Audio volume up key Requires Gecko 21.0
             0xE3, //DOM_VK_WIN_ICO_HELP (227)  An OEM specific key on Windows. This is (was?) used for Olivetti ICO keyboard.Requires Gecko 21.0
               0xE4, //DOM_VK_WIN_ICO_00 (228)  An OEM specific key on Windows. This is (was?) used for Olivetti ICO keyboard.Requires Gecko 21.0
                0xE6, //DOM_VK_WIN_ICO_CLEAR (230)  An OEM specific key on Windows. This is (was?) used for Olivetti ICO keyboard.Requires Gecko 21.0
                0xE9, //DOM_VK_WIN_OEM_RESET (233)  An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
             0xEA, //DOM_VK_WIN_OEM_JUMP (234)  An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
              0xEB, //DOM_VK_WIN_OEM_PA1 (235)  An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
              0xEC, //DOM_VK_WIN_OEM_PA2 (236)  An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
              0xED, //DOM_VK_WIN_OEM_PA3 (237)  An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
               0xEE, //DOM_VK_WIN_OEM_WSCTRL (238)  An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
                0xEF, //DOM_VK_WIN_OEM_CUSEL (239)  An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
             0xF0, //DOM_VK_WIN_OEM_ATTN (240)  An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
               0xF1, //DOM_VK_WIN_OEM_FINISH (241)  An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
             0xF2, //DOM_VK_WIN_OEM_COPY (242)  An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
             0xF3, //DOM_VK_WIN_OEM_AUTO (243)  An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
             0xF4, //DOM_VK_WIN_OEM_ENLW (244)  An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
              0xF5, //DOM_VK_WIN_OEM_BACKTAB (245)  An OEM specific key on Windows. This was used for Nokia/Ericsson's device.Requires Gecko 21.0
             0xF6, //DOM_VK_ATTN (246)  Attn (Attension) key of IBM midrange computers, e.g., AS/400. Requires Gecko 21.0
                0xF7, //DOM_VK_CRSEL (247)  CrSel (Cursor Selection) key of IBM 3270 keyboard layout. Requires Gecko 21.0
                0xF8, //DOM_VK_EXSEL (248)  ExSel (Extend Selection) key of IBM 3270 keyboard layout. Requires Gecko 21.0
                0xF9, //DOM_VK_EREOF (249)  Erase EOF key of IBM 3270 keyboard layout. Requires Gecko 21.0
             0xFA, //DOM_VK_PLAY (250)  Play key of IBM 3270 keyboard layout. Requires Gecko 21.0
             0xFB, //DOM_VK_ZOOM (251)  Zoom key. Requires Gecko 21.0
              0xFD, //DOM_VK_PA1 (253)  PA1 key of IBM 3270 keyboard layout. Requires Gecko 21.0
               0xFE //DOM_VK_WIN_OEM_CLEAR (254)  Clear key, but we're not sure the meaning difference from DOM_VK_CLEAR. Requires Gecko 21.0
        ];


    function isChar(e) {
        /*** Convert to Char Code ***/
        var keyCode = e.keyCode;

        //Ignore Shift Key events & arrows


        if (nonPrintableKeyCodes.indexOf(keyCode) > -1 ) {
            return false;
        }

        if (numericKeypadKeyCodes.indexOf(keyCode) > -1 ) {
            return false;
        }


        return true;
    }


    function keyPress(e) {
        this.streamKey(e.charCode);
        e.preventDefault();
        return false;

    }

    function keyDown(e) {


        if (isChar(e)) {
            return;
        }

        if (e.keyCode == Keys.DOM_VK_RETURN) {
            return;
        };


        if (e.keyCode == 8) {
            this.handleBackspace();

        };

        

        e.preventDefault();



    }

    Stdelm.prototype.handleBackspace = function() {


        var html = this.elm.innerHTML,
            lastLF = html.lastIndexOf("\n"),
            //+2 to take into account not only the LF but also the 
            // zero-width non-joiner
            startOfRow = lastLF == -1 ? 0 : lastLF + 2,
            sel = window.getSelection(),
            textNode = sel.focusNode,
            newOffset = sel.focusOffset - 1;

        var beforeRemoved = html.substring(0, startOfRow + this.bufferPosition - 1),
            afterRemoved = html.substring(startOfRow + this.bufferPosition);

        this.buffer.splice(this.bufferPosition - 1, 1);
        this.elm.innerHTML = beforeRemoved + afterRemoved;
        sel.collapse(textNode, Math.min(textNode.length, newOffset));

        this.bufferPosition--;



    }

    Stdelm.prototype.insertInbuffer = function(character) {
        this.buffer.splice(this.bufferPosition, 0, character);
        this.bufferPosition++;
    }

    Stdelm.prototype.clearBuffer = function() {
        this.buffer = [];
        this.bufferPosition = 0;
    }



    Stdelm.prototype.streamKey = function(charCode) {


        if (charCode === 13) {
            document.querySelector("#check").innerHTML += this.buffer.join("") + "\n";
            // we also add the zero-width non-joiner to display the caret on last line.
            this.elm.innerHTML += "\n&zwnj;";
            window.getSelection().extend(this.elm, 1);
            window.getSelection().collapseToEnd();
            this.clearBuffer();
            return false;
        }

        var character = String.fromCharCode(charCode);
        this.elm.innerHTML += character;
        this.insertInbuffer(character);

        window.getSelection().extend(this.elm, 1);
        window.getSelection().collapseToEnd();
    }



    function Stdelm(selector, options) {
        this.options = options || {};
        this.options.mode = this.options.mode || "line";

        this.clearBuffer();

        var elm = this.elm = document.querySelector(selector);

        if (this.options.mode == "line") {
            elm.addEventListener("keydown", keyDown.bind(this));
            elm.addEventListener("keypress", keyPress.bind(this));

        } else {

            elm.addEventListener("keyup", keyup.bind(this));
        }
    }

    exports.stdelm = function stdelm(selector, options) {
        new Stdelm(selector, options);

    };

})(window, window);
