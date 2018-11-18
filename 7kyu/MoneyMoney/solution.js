function calculateYears(principal, interest, tax, desired) {
    let y = 0;
    while (principal < desired){
      let yearsInterest = principal * interest;
      let deductedTax = yearsInterest * tax;
      let totalInterest = yearsInterest - deductedTax;
      principal += totalInterest;
      y++;
    }
    return y;
}

//interest = p *0.05 = 50
//tax = interest * tax
//total interest = interest - tax
//years total = p + Total interest