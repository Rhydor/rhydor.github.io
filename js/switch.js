function SwapDivsWithClick(divo, divt)
{
   div1 = document.getElementById(divo);
   div2 = document.getElementById("data_porta");
   div3 = document.getElementById("data_tools");
   div4 = document.getElementById("data_music");
   div5 = document.getElementById(divt);

   div5.style.display = "none";

   if (divo == 'data_porta'){
     div3.style.display = "none";
     div4.style.display = "none";
   }
   if (divo == 'data_music'){
     div2.style.display = "none";
     div3.style.display = "none";
   }
   if (divo == 'data_tools'){
     div2.style.display = "none";
     div4.style.display = "none";
   }

   if( div1.style.display == "none" )
   {
     div1.style.display = "block";
   }
   else
   {
     div5.style.display = "block";
     div1.style.display = "none";
   }
}
