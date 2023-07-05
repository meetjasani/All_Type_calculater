import unicodeimg from "../../Assets/Images/unicode.png"
import textreplacementimg from "../../Assets/Images/Text_Replacement.png"
import webpimg from "../../Assets/Images/WebP_to_JPG.png"
import repeat from "../../Assets/Images/repeat.png"
import cursedimg from "../../Assets/Images/cursed.png"
import texttoolimg from "../../Assets/Images/online_text.png"
import onlinenotepadimg from "../../Assets/Images/online_notepad.png"
import facebookimg from "../../Assets/Images/facebook.png"
import jsontotext from "../../Assets/Images/jsontotext.png"
import encodedecoderimg from "../../Assets/Images/encodertodecoder.png"

export const Convertor = () => {
    return [
        {
            smalltext: repeat,
            more: "Repeat Text Generator",
            route: "Repeattext/Repeattext"
        },

        {
            smalltext: textreplacementimg,
            more: "Text Replacement Tool",
            route: "/Textreplace/Textreplace"
        },
        {
            smalltext: cursedimg,
            more: "Cursed Text Tool",
            route: "/Cursedtext/Cursedtext"
        },
        {
            smalltext: jsontotext,
            more: "JSON Stringify Text Generator",
            route: "/Jsonstrinf/Jsonstrinf"
        },
        {
            smalltext: facebookimg,
            more: "Facebook Font Generator",
            route: "/Facebookfont/Facebookfont"
        },
        {
            smalltext: encodedecoderimg,
            more: "UTF-8 Encoder/Decoder",
            route: "/Encoder/Encoder"
        },
        {
            smalltext: webpimg,
            more: "NATO Phonetic Alphabet Translator",
            route: "/Natoalbhabet/Natoalbhabet"
        },
        {
            smalltext: onlinenotepadimg,
            more: "Online Notepad",
            route: "/Notepadoutline/Notepadoutline"
        },
        {
            smalltext: texttoolimg,
            more: "Online Text Tools",
            route: "/Outlinetext/Outlinetext"
        },
    ]
}