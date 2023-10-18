var sidebarBtn = document.getElementById("sidebarBtn");
          var sidebar = document.getElementById("sidebar");
          var sidebarContainer = document.getElementById("sidebarContainer");
          var sideClose = document.getElementById("sideClose");
      
          sidebarBtn.addEventListener("click", ()=>{
              sidebar.classList.add("open")
          })
          sidebar.addEventListener("click", ()=>{
              sidebar.classList.remove("open")
          })
          sideClose.addEventListener("click", (e)=>{
              e.stopPropagation()
              sidebar.classList.remove("open")
          })
          sidebarContainer.addEventListener("click", (e)=>{
              e.stopPropagation()
              sidebar.classList.add("open")
          })