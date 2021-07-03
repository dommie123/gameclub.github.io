package com.gameclub.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name="memes")
public class Meme {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	private String title;
	
	private byte[] byteStream;
	
	@ManyToOne(cascade=CascadeType.ALL)
	private User author;
	
	public Meme(String title, byte[] byteStream, User author) {
		this.title = title;
		this.byteStream = byteStream;
		this.author = author;
	}

}
