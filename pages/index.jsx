import Layout from '../components/Layout'
import Input from '../components/Input'
import Button from '../components/Button'
import ButtonTeste from '../components/ButtonTeste'

export default function Home() {
    return (
        <Layout titulo={'Tela de cadastro de clientes'} titulinho={'CLIENTES'}>
            <header className='bg-primary p-2 d-flex justify-content-center' style={{borderRadius: 5}}>
                <h1 style={{fontSize: 60}}><i className="bi bi-boxes mx-2"/>Xstoke</h1>
            </header>
            <div className='m-2 py-3 px-4'>
                <p className='text-white'>Informe os dados cadastrais do cliente:</p>
                <Input label={'CNPJ:'} campo={'cnpj'}></Input>
                <Input label={'Razão Social:'} campo={'razao'}></Input>
                <Input label={'Logradouro:'} campo={'logradouro'}></Input>
                <Input label={'Número:'} campo={'numero'}></Input>
                <Input label={'Cidade:'} campo={'cidade'}></Input>
                <Input label={'UF:'} campo={'uf'}></Input>
                <div className='d-flex justify-content-between'>
                    <ButtonTeste alerta={'Cancelando cadastro'} classe={'btn-danger w-50 mx-1'}>Cancelar</ButtonTeste>
                    <ButtonTeste alerta={'Cadastrando Cliente'} classe={'btn-warning w-50 mx-1'}>Cadastrar</ButtonTeste>
                </div>
            </div>
            <Button style={{top: 10, right: 10}} classe={'btn-success'} link={'#'}>Avançar</Button>
        </Layout>
    )
}