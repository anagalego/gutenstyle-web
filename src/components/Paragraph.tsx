export interface ParagraphProps {
    text?: string;
}

export default function Paragraph({
    text = "Paragraph",
}: ParagraphProps) { 
    return (<>
        <p>
            Gutenstyle is an adaptable system of guidelines, components, and tools that support the best practices of user interface design.
            Backed by open-source code, Gutenstyle streamlines collaboration between designers and developers, and helps teams quickly build beautiful products.
        </p>
        <p>{text}</p>
        <p>Gutenstyle is an adaptable system of guidelines, components, and tools that support the best practices of user interface design.
            Backed by open-source code, Gutenstyle streamlines collaboration between designers and developers, and helps teams quickly build beautiful products.
        </p>
        <p>
            Text taken from Material Design: (https://m3.material.io/styles/icons/designing-icons)
        </p>    
    </>
    )
}