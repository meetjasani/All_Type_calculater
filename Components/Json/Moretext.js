import smallimage from "../../Assets/Images/smalltext.png"
import morseimg from "../../Assets/Images/morse.png"
import bubbletext from "../../Assets/Images/bubble_text.png"
import jsontext from "../../Assets/Images/jsontotext.png"
import repeatimg from "../../Assets/Images/repeat.png"
import hextotextimg from "../../Assets/Images/Hex_to_Text.png"
import italicimg from "../../Assets/Images/italic.png"
import sentenseimg from "../../Assets/Images/sentence.png"
import binaryimage from "../../Assets/Images/binary.png"
import romannumeralimg from "../../Assets/Images/Roman_Numeral.png"
import boldimg from "../../Assets/Images/bold.png"
import unicodeimg from "../../Assets/Images/unicode.png"
import webptojpgimg from "../../Assets/Images/WebP_to_JPG.png"

export const Moretext = () => {
    return [
        {
            smalltext: morseimg,
            more: "Morse Code Translator",
            route: "/Morsecode/Morsecode"
        },
        {
            smalltext: binaryimage,
            more: "Binary Code Translator",
            route: "/Binary/Binary"
        },
        {
            smalltext: bubbletext,
            more: "Title case Translator",
            route: "/Titlecase/Titlecase"
        },
        {
            smalltext: boldimg,
            more: "Bold Case Translator",
            route: "/Boldcase/Boldcase"
        },
        {
            smalltext: italicimg,
            more: "Italic Code Translator",
            route: "/Italicetext/Italicetext"
        },
        {
            smalltext: unicodeimg,
            more: "Unicode Text Converter",
            route: "/Unicodetext/Unicodetext"
        },
        {
            smalltext: sentenseimg,
            more: "Sentence Text Converter",
            route: "sentencecase/sentencecase"
        },
        {

            smalltext: hextotextimg,
            more: "Hex to Text Converter",
            route: "Hexconvert/Hexconvert"
        },
        {
            smalltext: webptojpgimg,
            more: "WebP to JPG Converter",
            route: "/Imageconvert/Imageconvert"
        },
        {
            smalltext: romannumeralimg,
            more: "Roman Numeral Date Converter",
            route: "Romantext/Romantext"
        },
        // {
        //     smalltext: cursedimg,
        //     more: "Cursed Text Tool",
        //     route: '/Cursedtext/Cursedtext'
        // },
        // {
        //     smalltext: facebookimg,
        //     more: "Facebook Font Generator",
        //     route: "/Facebookfont/Facebookfont"
        // },
    ]

}


