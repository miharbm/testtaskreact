import { Table, Typography, Space } from 'antd';
import {useGetProductsQuery} from "../../api/fakeStoreApi.js";

const { Title } = Typography;

const ProductTable = () => {
    const { 
        data: products, 
        error, 
        isLoading 
    } = useGetProductsQuery(undefined, undefined);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Категория',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price}`,
        },
        {
            title: 'Рейтинг',
            dataIndex: 'rating',
            key: 'rating',
            render: (rating) => `${rating.rate} (${rating.count} отзывов)`,
        },
    ];

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка при загрузке данных</p>;

    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <Title level={3}>Список продуктов</Title>
            <Table
                columns={columns}
                dataSource={products}
                rowKey={(record) => record.id}
                pagination={{ pageSize: 10 }}
            />
        </Space>
    );
};

export default ProductTable;
