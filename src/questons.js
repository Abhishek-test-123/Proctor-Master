import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const quizQuestions = [
    {
        id: 1,
        question: 'What is the capital of France?',
        options: [
            { id: 1, answer: 'Paris', isCorrect: true },
            { id: 2, answer: 'Madrid', isCorrect: false },
            { id: 3, answer: 'Rome', isCorrect: false },
            { id: 4, answer: 'London', isCorrect: false },
        ],
    },
    {
        id: 2,
        question: 'What is the tallest mountain in the world?',
        options: [
            { id: 1, answer: 'K2', isCorrect: false },
            { id: 2, answer: 'Mount Everest', isCorrect: true },
            { id: 3, answer: 'Kangchenjunga', isCorrect: false },
            { id: 4, answer: 'Lhotse', isCorrect: false },
        ],
    },
    {
        id: 3,
        question: 'What is the largest planet in our solar system?',
        options: [
            { id: 1, answer: 'Saturn', isCorrect: false },
            { id: 2, answer: 'Jupiter', isCorrect: true },
            { id: 3, answer: 'Neptune', isCorrect: false },
            { id: 4, answer: 'Uranus', isCorrect: false },
        ],
    },
];

const McqQuiz = () => {
    setTimeout(function () {
        if ((window.screenTop && window.screenY) === 0) {
            window.location.href = '/'
        }
    }, 1000)

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showAnswers, setShowAnswers] = useState(false);

    const questionsPerPage = 1;
    const totalPages = Math.ceil(quizQuestions.length / questionsPerPage);

    const handleAnswerSelect = (questionId, optionId) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: optionId,
        }));
    };

    const handleSubmitQuiz = (e) => {
        e.preventDefault();
        setShowAnswers(true);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <Container>
            <h1 className="text-center my-4">MCQ Quiz</h1>
            {quizQuestions
                .slice((currentPage - 1) * questionsPerPage, currentPage * questionsPerPage)
                .map((question) => (
                    <Card key={question.id} className="my-4">
                        <Card.Body>
                            <Card.Title>{question.question}</Card.Title>
                            {question.options.map((option) => (
                                <div key={option.id} className="my-2">
                                    <Form.Check
                                        type="radio"
                                        name={`question_${question.id}`}
                                        label={option.answer}
                                        onChange={() => handleAnswerSelect(question.id, option.id)}
                                        disabled={showAnswers}
                                    />
                                    {showAnswers && option.isCorrect && (
                                        <span className="text-success ms-2">
                                            <i className="bi bi-check-circle"></i>
                                        </span>
                                    )}
                                    {showAnswers &&
                                        !option.isCorrect &&
                                        selectedAnswers[question.id] === option.id && (
                                            <span className="text-danger ms-2">
                                                <i className="bi bi-x-circle"></i>
                                            </span>
                                        )}
                                    {showAnswers &&
                                        !option.isCorrect &&
                                        selectedAnswers[question.id] !== option.id && (
                                            <span className="text-muted ms-2">
                                                <i className="bi bi-dash-circle"></i>
                                            </span>
                                        )}
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                ))}
            {currentPage > 1 && (
                <Button variant="secondary" className="me-2" onClick={handlePrevPage}>
                    Prev
                </Button>
            )}
            {currentPage < totalPages && (
                <Button variant="secondary" onClick={handleNextPage}>
                    Next
                </Button>
            )}
            {currentPage === totalPages && (
                <Button variant="primary" onClick={handleSubmitQuiz}>
                    Submit
                </Button>
            )}
        </Container>
    );
};

export default McqQuiz;