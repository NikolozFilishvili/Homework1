# this will split strings in twos 
def solution(s):
  slist = list(s)
  s = 0
  o = 2
  i=0
  new_list = []
  if len(slist) % 2 != 0:
    slist.append("_")
  else:
    None
  
  while i<len(slist):
    i+=2
    new_list.append("".join(slist[s:o]))
    o+=2
    s+=2
      
  return new_list

# and it works fine wala

print(solution("ambatucam12"))  