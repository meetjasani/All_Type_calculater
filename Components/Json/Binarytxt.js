import bingtextimg from "../../Assets/Images/binarytotext.png"
import textbinryimg from "../../Assets/Images/texttobinary.png"
import binaryhex from "../../Assets/Images/binarytohex.png"
import binarytoascii from "../../Assets/Images/binarytoascii.png"
import binarytodec from "../../Assets/Images/binarytoascii.png"
import binarytranslator from "../../Assets/Images/binarytransltor.png"

export const Binarytxt = () => {
    return (
        [
            {
                id: 1,
                smalltext: textbinryimg,
                more: "Text  To Binary",
                route: "/Texttobinary/Texttobinary"
            },
            {
                smalltext: bingtextimg,
                more: "Binary To Text",
                route: "/Binarytotext/Binarytotext"
            },
            {
                smalltext: binaryhex,
                more: "Binary To Hex",
                route: "/Binarytohex/Binarytohex"
            },
            {
                smalltext: textbinryimg,
                more: "Hex To Binary",
                route: "/Hextobinary/Hextobinary"
            },
            {
                smalltext: binarytoascii,
                more: "Binary To ASCII",
                route: "/Binarytoascii/Binarytoascii"
            },
            {
                smalltext: textbinryimg,
                more: "ASCII to Binary",
                route: "/Asciitobinary/Asciitobinary"
            },
            {
                smalltext: binarytodec,
                more: "Binary To Decimal",
                route: "/Binarytodecimal/Binarytodecimal"
            },
            {
                smalltext: textbinryimg,
                more: "Decimal To Binary",
                route: "/Decimaltobinary/Decimaltobinary"
            },
            {
                smalltext: binarytoascii,
                more: "Text To ASCII",
                route: "/Texttoasacii/Texttoasacii"
            },
            {
                smalltext: binaryhex,
                more: "Decimal To HEX",
                route: "/Decimaltohex/Decimaltohex"
            },
            {
                smalltext: binarytranslator,
                more: "Binary Translator",
                route: "/Binarytranslator/Binarytranslator"
            },
        ]
    )
}