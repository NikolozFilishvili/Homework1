function persistence(num) {
    //mokled aq momiwevs num->string->num*num=num->string->num da ase gagrzeleba
      let st = num.toString() 
      let sus = 1
      let joe = st.length
      while (joe > 1){
         for (i=0;i<joe;i++){
           sus *= Number(st[i])
         }
         st = sus.toString()
         sus = 1
         joe = st.length
      }
      return Number(st);
    } 
console.log(persistence(39)) 