import { ButtonProperty } from "@/types/components/ButtonProperty";
import Button from "../Button";
import { buttonPropertiesDataWithIds } from "@/data/component-properties/button-data";
import { Dropdown } from "../Dropdown";


interface DemoAreaProps {
    properties: ButtonProperty[];
}

export default function DemoArea({
    properties = buttonPropertiesDataWithIds
}: DemoAreaProps) {
    return (
    <div className='flex gap-4 bg-stone-200'>
        <div className='w-full p-2 flex justify-center items-center'>
            <Button />
        </div>
        <div className='flex flex-col gap-2 bg-white'>
            {properties.map((node) => (
                <div className='w-full' key={node.id}>
                    {node && node.variants}
                    <Dropdown
                    name={node.name}
                    options={node.variants}
                    />
                </div>
            ))}
        </div>
    </div>
    )
}