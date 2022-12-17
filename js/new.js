/*var number=parseInt(prompt("enter limit :"));
var x=number;
var y=number;
var string="";
for(i=0;i<number;i++)
{
	for(j=0;j<number*2;j++)
	{
		if(j==x||j==y||(x%2==0 && j%2==0 && y>j && j>x)||(x%2!=0 && j%2!=0 &&  y>j && j>x))
		{
			document.write("*");
			string+="*";
		}
		else
		{
			document.write("</br>");
			string+=" ";
		}
	}
	console.log(string);
	string="";
	x=x-1;
	y=y+1;
	document.write("<br>");
}*/

var num=parseInt(prompt("enter a number"));
var string="";
for ( i=1; i<=num;i++)
{
	for ( j=1;j<=num-i;j++)
	{
		string += "";
	}
		for ( k=1;k<=2*i-1; k++)
		{
			string+="*";
		}
		string+="\n"	;
}
console.log(string)