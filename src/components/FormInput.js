import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { question } from '../data';

const FormInput = ({ onAdd, notify }) => {
    const [qu, setQu] = useState('');
    const [an, setAn] = useState('');

    const addNewItem = () => {
        if (qu === '' || an === '') {
            notify('من فضلك أكمل البيانات', 'error');
            return;
        }
        question.push({ id: Math.random(), q: qu, a: an });
        setQu('');
        setAn('');
        onAdd();
    };

    return (
        <Row className='py-3'>
            <Col md={5}>
                <Form.Group>
                    <Form.Control
                        value={qu}
                        onChange={e => setQu(e.target.value)}
                        type='text' placeholder='السؤال'
                    />
                </Form.Group>
            </Col>
            <Col md={5}>
                <Form.Group>
                    <Form.Control
                        value={an}
                        onChange={e => setAn(e.target.value)}
                        type='text' placeholder='الإجابة'
                    />
                </Form.Group>
            </Col>
            <Col md={2}>
                <Button onClick={addNewItem} className='btn-color w-100' type='submit'>إضافة</Button>
            </Col>
        </Row>
    );
}

export default FormInput;
