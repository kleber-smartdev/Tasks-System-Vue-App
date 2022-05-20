<template>
<div class="hr-footer-top"><!--Divisor verde --></div>
<div class="footer-bg">
    <div class="container">         
        <footer>          
            <div class="custom-footer">
                
            <div class="p-1 flex-fill bd-highlight align-self-md-start mb-3">
                <a href="https://kleberux.com" target="_blank">
                    <h2><strong>Kleber Sousa</strong></h2>
                    <h4>UI/UX, Frontend Developer</h4>
                </a>
            </div>

            <div class="p-1 flex-fill bd-highlight align-self-md-start mb-2">
                    <a href="mailto:kleber.sousa@yahoo.com" target="_blank">
                        <div class=" mb-3"><img src="@/assets/email.svg" class="footer-icons" /></div>
                        <div>kleber.sousa@yahoo.com</div>
                    </a>
            </div>

            <div class="p-1 flex-fill bd-highlight align-self-md-start mb-2">
                    <a href="https://kleberux.com" target="_blank">
                        <div class=" mb-3"><img src="@/assets/computer.svg" class="footer-icons" /></div>
                        <div>kleberUX.com</div>
                    </a>
            </div>

            <div class="p-1 flex-fill bd-highlight align-self-md-start mb-2">
                    <a href="https://linkedin.com/in/klebersousa" target="_blank">
                        <div class=" mb-3"><img src="@/assets/linkedin.svg" class="footer-icons" /></div>
                        <div>linkedin.com/in/<br>klebersousa</div>
                    </a>
            </div>
            <div class="p-1 flex-fill bd-highlight align-self-md-start mb-2">
                    <a href="https://github.com/kleber-smartdev" target="_blank">
                        <div class=" mb-3"><img src="@/assets/github.svg" class="footer-icons" /></div>
                        <div>github.com/<br>kleber-smartdev</div>
                    </a>
            </div>


            </div>
            <div class="p-1 flex-fill bd-highlight align-self-md-start mt-4">
                <p>Vancouver, Canada - Copyright &copy; {{ year }}</p>
            </div>

        </footer>
    </div>
</div>
</template>


<script>
export default {
  name: "getYear",
  setup() {
    return { year: new Date().getFullYear() };
  },
};
</script>


<style scoped>
/* FooterBar.vue scoped CSS */
@import url("@/styles/footer.css");
</style>