package Repository;

import java.util.ArrayList;
import java.util.List;

import Models.BalanceModel;

public class BalanceData {
	
	public List<BalanceModel> getBalanceData(){
		List<BalanceModel> _balanceList = new ArrayList<BalanceModel>();
		//AMERICAS tab data
		_balanceList.add(new BalanceModel("AME1","AMERICAS","USD", "INR 4.87b", "USD 73.86m"));
		_balanceList.add(new BalanceModel("AME2","AMERICAS","USD", "INR 4.87b", "USD 73.86m"));
		_balanceList.add(new BalanceModel("AME3","AMERICAS","USD", "INR 4.87b", "USD 73.86m"));
		
		//MIDDLEEAST tab data
		_balanceList.add(new BalanceModel("MD1","MIDDLEEAST","USD MD", "INR 4.87b", "USD 73.86m"));
		_balanceList.add(new BalanceModel("MD2","MIDDLEEAST","USD MD", "INR 4.87b", "USD 73.86m"));
		_balanceList.add(new BalanceModel("MD3","MIDDLEEAST","USD MD", "INR 4.87b", "USD 73.86m"));
		
		//AFRICA tab data
		_balanceList.add(new BalanceModel("AF1","AFRICA","USD AF", "INR 4.87b", "USD 73.86m"));
		_balanceList.add(new BalanceModel("AF2","AFRICA","USD AF", "INR 4.87b", "USD 73.86m"));
		_balanceList.add(new BalanceModel("AF3","AFRICA","USD AF", "INR 4.87b", "USD 73.86m"));
				
				
		
		return _balanceList;
		
	}

}
