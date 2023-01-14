import React from 'react'
import { Accordion, Button } from 'react-bootstrap';
import { question } from '../data';

const QAList = ({ data, deleteItem }) => {
    const qAData = JSON.parse(localStorage.getItem('items'));

    const onDeleteItem = (id) => {
        if (localStorage.getItem('items') != null) {
            const index = question.findIndex(item => item.id === id);
            question.splice(index, 1);
            deleteItem(question);
        }
    };
    
    return (
        <div>
            <Accordion>
                {
                    localStorage.getItem('items') != null ? (qAData.map((item, index) => {
                        return (
                            <Accordion.Item eventKey={item.id} key={index}>
                                <Accordion.Header>
                                    <div className='m-auto'>{item.q}</div>
                                </Accordion.Header>
                                <Accordion.Body className='text-end'>
                                    <div className='px-3 d-inline'>{item.a}</div>
                                    <Button
                                        className='btn-color'
                                        onClick={() => onDeleteItem(item.id)}
                                    >
                                        مسح
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>
                        );
                    })) : <h2 className='p-5 text-center fs-4'>لا يوجد أسئلة</h2>
                }
                
            </Accordion>
        </div>
    );
}

export default QAList;
