const check=document.querySelector('.submit');
const textArea=document.querySelector('#vowel');
check.addEventListener('click',vowel_count)
function vowel_count(str1){
    str1 = textArea.value.toString();
    var vowel_list='aeiouAEIOU';
    var v_count=0;
    for(var x=0;x<str1.length;x++){
        if(vowel_list.indexOf(str1[x])!==-1){
            v_count++; 
        }
    } 
    alert(v_count);
    textArea.value="";
}
