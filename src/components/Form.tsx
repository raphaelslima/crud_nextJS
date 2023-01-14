import { useState } from "react"
import Client from "../core/Client"
import Button from "./Button"
import Input from "./Input"

interface propsForm {
    client: Client
    cancel: () => void
    changeClient: (client: Client) => void
}

export default function Form(props: propsForm) {

    const id = props.client?.id

    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id ? <Input text={'ID'} value={id} onlyReed={true}/> : false}
            <Input text={'Nome'} value={name} onChange={setName} />
            <Input text={'Idade'} value={age} type={'number'} onChange={setAge} />

            <div className="flex justify-end mt-5">
                <Button 
                    color={'blue'} 
                    className={'mr-2'} 
                    onClick={()=> props.changeClient?.(new Client(name,age,id))}>
                        {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button color={'gray'} onClick={props.cancel}>Cancelar</Button>
            </div>
        </div>
    )
}