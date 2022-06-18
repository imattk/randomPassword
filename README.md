# RandomPassword
Random Password Generator

Made a Random password generator using HTML, CSS, JavaScript and I added a fun feature with Sweet Alert.
When you click the password you want it will copy it to the clipboard. then you get a "sweet alert" saying that its copied to clipboard. 

Struggled getting each box to have a uniqe password. each box would populate with the same password. I then changed it to four of the same code and it started working. I'm sure there is a way to combine all of them into one code. as a rule redundancy is not good with coding. 

How is redundancy going to affect the code?

The code becomes fragile – The developer might not be aware of all the possible copies of the code, may be because he is new to the system, and hence might miss fixing the code at few places and this can lead to a broken functionality. So any change to be made has to be done very carefully.

The code is hard to maintain and extend – with no option of resue, copy-paste of code will become a rage. There would be no element of reuse. And it would also add to the number of lines of code.

The code becomes hard to read – especially in case of redundancy of algorithms/logic. The person reading the code would have no idea why the same algorithm is written in 2 different ways at 2 different places. It creates a grey area in the code.

- Mohamed Sanaulla from Dzone - "Redundancy: An Open Enemy to Writing Good Code"
