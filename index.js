class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }

  static sanitize(string){
    string.replace(/[^a-zA-Z0-9-' ]/g, '')
  }

  static titleize(string){
    let stringArray = string.split(' ')
    const ESCAPEWORDS = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let newString = []
    for (const s of stringArray){
      if (ESCAPEWORDS.includes(s)){
        newString.push(s)
      }else{
        newString.push(s.capitalize)
      }
      return newString.join("")
    }
  }


}
