package Models;

public class BalanceModel {
	
	private String id;
	private String region;
	private String currency;
	private String BCE;
	private String ACE;
	
	public BalanceModel(String id,String region,String currency,String BCE, String ACE){
		this.id = id;
		this.region = region;
		this.currency = currency;
		this.BCE = BCE;
		this.ACE = ACE;
	}
	
	public String getId() {
		return this.id;
	}
	
	public String getCurrency() {
		return this.currency;
	}
	
	public String getBCE() {
		return this.BCE;
	}
	
	public String getACE() {
		return this.ACE;
	}
	
	public String getRegion() {
		return this.region;
	}

}
