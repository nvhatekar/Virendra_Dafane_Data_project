package Models;

public class TransactionModel {
	
	String id;
	String balId;
	String payRefFileName;
	String payFrom;
	String payTo;
	String amount;
	String payDate;
	String payType;
	String status;
	public TransactionModel(String id, String balId, String payRefFileName, String payFrom, String payTo, String amount,
			String payDate, String payType, String status) {
		this.id = id;
		this.balId = balId;
		this.payRefFileName = payRefFileName;
		this.payFrom = payFrom;
		this.payTo = payTo;
		this.amount = amount;
		this.payDate = payDate;
		this.payType = payType;
		this.status = status;
	}
	public String getId() {
		return id;
	}
	public String getBalId() {
		return balId;
	}
	public String getPayRefFileName() {
		return payRefFileName;
	}
	public String getPayFrom() {
		return payFrom;
	}
	public String getPayTo() {
		return payTo;
	}
	public String getAmount() {
		return amount;
	}
	public String getPayDate() {
		return payDate;
	}
	public String getPayType() {
		return payType;
	}
	public String getStatus() {
		return status;
	}
	
	
	
	

}
