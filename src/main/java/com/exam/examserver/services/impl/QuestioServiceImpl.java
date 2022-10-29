package com.exam.examserver.services.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.examserver.models.exam.Question;
import com.exam.examserver.models.exam.Quiz;
import com.exam.examserver.repo.QuestionRepository;
import com.exam.examserver.services.QuestionService;


@Service
public class QuestioServiceImpl implements QuestionService{
	
	@Autowired
	private QuestionRepository questionRepository;
	
	

	@Override
	public Question addQuestion(Question question) {
		
		return this.questionRepository.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
	 
		return this.questionRepository.save(question);
	}

	@Override
	public Set<Question> getQuestions() {
		
		return new HashSet<>(this.questionRepository.findAll());
	}

	@Override
	public Question getQuestion(Long qId) {
		
		return this.questionRepository.findById(qId).get();
	}

	@Override
	public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
		
		return this.questionRepository.findByQuiz(quiz);
	}

	@Override
	public void deleteQuestion(Long qId) {
		Question question = new Question();
		question.setQuesid(qId);
		this.questionRepository.delete(question);
		
	}

}
