import { Layout } from 'antd'
import { text } from 'stream/consumers'
export const LayoutHeader = () => {
    const text = (id:number) => {
        console.log(id)
    }
    return (
        <Layout.Header style={{backgroundColor:'rgba(0, 0, 0, 0.85)'}}>
            <div style={{color:'orangered'}} onClick={() => text(1)}>Shopee Video</div>
        </Layout.Header>
    )
}