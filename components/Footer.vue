<template>
    <footer class="footer">
        <div class="footer-notes">
            <div class="col" style="float: left; width: 60%">
                <div style="margin-bottom: 20px">
                Built with 
                <a href="https://github.com/nuxt/nuxt.js" target="_blank">
                    Nuxt.js
                </a>
                </div>
                <div style="margin-bottom: 20px">
                    Powered by 
                    <a href="https://www.djangoproject.com" target="_blank">
                        <span class="powered-by">Django</span>
                    </a>
                </div>
            </div>
            <div class="col" style="float: left; width: 40%">
                <div style="margin-bottom: 20px">
                    &copy; {{ new Date().getFullYear() }} Alex Lawson
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
    </footer>
</template>

<style>
    .footer {
        background-color: #343a40;
        width: 100%;
    }
    .footer-notes {
        margin: 0 auto;
        max-width: 960px;
        padding: 15px;
        padding-bottom: 60px;
        padding-top: 40px;
    }
</style>