package com.exam.examserver.services;

import java.util.Set;

import com.exam.examserver.models.exam.Question;
import com.exam.examserver.models.exam.Quiz;

public interface QuestionService {
	
	public Question addQuestion(Question question);
	
	public Question updateQuestion(Question question);
	
	public Set<Question> getQuestions();
	
	public Question getQuestion(Long qId);
	
	public Set<Question> getQuestionsOfQuiz(Quiz quiz);
	
	
	public void deleteQuestion(Long qId);
	
	public Question get(Long questionsId);
	

}
