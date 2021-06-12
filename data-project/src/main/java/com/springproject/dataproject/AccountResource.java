package com.springproject.dataproject;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Models.BalanceModel;
import Models.TransactionModel;
import Repository.BalanceData;
import Repository.TransactionData;

@RestController
@RequestMapping("/api/accounts")
public class AccountResource {
	
	@CrossOrigin
	@GetMapping("/balanceinfo")
	public List<BalanceModel> getBalance() {
		BalanceData o = new BalanceData();
		return o.getBalanceData();
	}
	
	@CrossOrigin	
	@GetMapping("/transdetail")
	public List<TransactionModel> getTransDetail() {
		TransactionData o = new TransactionData();
		return o.getTransactionData();
	}

}
