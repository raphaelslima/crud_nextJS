interface propsInput{
    text: string
    type?:  'text' | 'number'
    value: any
    onlyReed?: boolean
    onChange?: (value: any) => void
}

export default function Input(props: propsInput){
    return(
        <div className="flex flex-col mb-4">
            <label className="mb-4">{props.text}</label>
            <input
                className={`
                    border border-purple-500 rounded-lg
                    focus:bg-gray-300
                    focus:outline-none
                    bg-gray-50
                    px-4 py-2
                    ${props.onlyReed ? '' : 'bg-white'}
                `} 
                type={props.type ?? 'text'} 
                value={props.value}
                readOnly={props.onlyReed ?? false}
                onChange={e => props.onChange?.(e.target.value)}
                />
        </div>
    )
}