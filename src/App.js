import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { question } from "./data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [data, setData] = useState(question);
    const addItem = () => {
        localStorage.setItem('items', JSON.stringify([...question]));
        setData([...question]);
        notify('تم الإضافة بنجاح', 'success');
    };

    const deleteItems = () => {
        localStorage.removeItem('items');
        question.splice(0, question.length);
        setData([]);
        notify('تم حذف جميع الأسئلة بنجاح', 'success');
    };

    const deleteItem = (items) => {
        localStorage.setItem('items', JSON.stringify([...items]));
        setData([...items]);
        if (items.length <= 0) {
            deleteItems();
        }
        notify('تم حذف السؤال بنجاح', 'success');
    };

    const notify = (message, type) => {
        if (type === 'error') {
            toast.error(message);
        } else if (type === 'success') {
            toast.success(message);
        }
    };

    return (
        <div className="font text-center color-body">
            <Container className="p-5">
                <Row className="justify-content-center">
                    <Col md={4}>
                        <div className="fs-3 text-center py-2">أسئلة وأجوبة شائعة</div>
                    </Col>
                    <Col md={8}>
                        <FormInput onAdd={addItem} notify={notify} />
                        <QAList data={data} deleteItem={deleteItem} />
                        {
                            localStorage.getItem('items') ?
                            (<Button
                                className="btn-color w-100 my-2"
                                onClick={deleteItems}
                            >
                                مسح الكل
                            </Button>) : null
                        }
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </div>
    );
}

export default App;
