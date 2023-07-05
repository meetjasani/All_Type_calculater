import reversetext from "../../Assets/Images/reversetext.png"
import underlineimg from "../../Assets/Images/undeline.png"
import smalltext from "../../Assets/Images/smalltext.png"
import Wideimage from "../../Assets/Images/widetext.png"
import Morstext from "../../Assets/Images/morse.png"
import binaryimage from "../../Assets/Images/binary.png"
import glitchimg from "../../Assets/Images/glitch.png"
import boldimage from "../../Assets/Images/bold.png"
import italicimage from "../../Assets/Images/italic.png"
import sentencecaseimg from '../../Assets/Images/sentence-case.png'
import bubbletext from "../../Assets/Images/bubble_text.png"
import Strikethrough from "../../Assets/Images/linethrough.png"
import upsideimg from "../../Assets/Images/upsidedown.png"
import capitalizeimg from "../../Assets/Images/capitalize.png"
import invisibletextimg from "../../Assets/Images/Invisible_Text.png"
import uppercaseimg from '../../Assets/Images/uppercase.png'
import lowercaseimg from '../../Assets/Images/lowercase.png'

export const Case = () => {
    return [
        {
            id: 1,
            smalltext: smalltext,
            data: "Small text Generator",
            route: "/Smalltext/Smalltext"
        },
        {
            id: 2,
            smalltext: Wideimage,
            data: "Wide Text Generator",
            route: "/Widetext/Widetext"
        },
        {
            id: 3,
            smalltext: Strikethrough,
            data: "Strikethrough Text Generator",
            route: "/Strikethrough/Strikethrough"
        },
        {
            id: 4,
            smalltext: reversetext,
            data: "Reverse Text Generator",
            route: "/Reverse/Reverse"
        },
        {
            id: 5,
            smalltext: upsideimg,
            data: "Upside Down Text Generator",
            route: "/Upside/Upside"
        },
        {
            id: 6,
            smalltext: underlineimg,
            data: "Underline Text generator",
            route: "Underline/Underline"
        },
        {
            id: 7,
            smalltext: upsideimg,
            data: "Mirror Text generator",
            route: "/Mirrortext/Mirrortext"
        },
        {
            id: 8,
            smalltext: bubbletext,
            data: " Bubble Text generator",
            route: "/Buubletext/Buubletext"
        },
        {
            id: 9,
            smalltext: glitchimg,
            data: "Zalgo Glitch Text Generator",
            route: "Glitchtext/Glitchtext"
        },
        {
            id: 10,
            smalltext: invisibletextimg,
            data: "Invisible Text Generator",
            route: "Invisibletext/Invisibletext"
        },
        {
            id: 11,
            smalltext: sentencecaseimg,
            data: "Sentence case",
            route: "Convertext/Converttext"
        },
        {
            id: 12,
            smalltext: lowercaseimg,
            data: "lower case",
            route: "Convertext/Converttext"
        },
        {
            id: 13,
            smalltext: uppercaseimg,
            data: "UPPER CASE",
            route: "Convertext/Converttext"
        },
        {
            id: 14,
            smalltext: capitalizeimg,
            data: "Capitalized Case",
            route: "Convertext/Converttext"
        },
    ]
}