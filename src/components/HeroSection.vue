 <template>
   <section class="hero">
     <div class="hero-image"></div>
     <div class="hero-gradient"></div>
     <div class="hero-particles">
       <span></span><span></span><span></span><span></span>
       <span></span><span></span><span></span><span></span>
     </div>
     <div class="hero-overlay"></div>
     <div class="hero-content">
       <h1>飨食堂</h1>
       <div class="hero-divider"></div>
       <p>手工料理 · 暖心呈现</p>
       <div class="hero-badge">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
         4.9 星好评 · 每日新鲜现做
       </div>
     </div>
   </section>
 </template>
 
 <style scoped>
 .hero{
   margin-top:var(--header-h);
   height:460px;
   position:relative;
   overflow:hidden;
   display:flex;align-items:center;justify-content:center;
   text-align:center;color:#fff;
 }
 .hero-image{
   position:absolute;inset:0;
   background: url(../assets/hero-bg.jpg) center center / cover no-repeat;
   z-index:0;
 }
 .hero-image::after{
   content:'';position:absolute;inset:0;
   background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
   opacity:0.12;mix-blend-mode:overlay;
 }
 .hero-gradient{
   position:absolute;inset:0;z-index:0;
   background:
     linear-gradient(135deg, rgba(26,20,16,0.85) 0%, rgba(44,31,22,0.6) 40%, transparent 70%),
     linear-gradient(0deg, rgba(26,20,16,0.6) 0%, transparent 40%),
     linear-gradient(180deg, rgba(26,20,16,0.3) 0%, transparent 30%);
   pointer-events:none;
 }
 .hero-particles{
   position:absolute;inset:0;z-index:0;
   overflow:hidden;pointer-events:none;
 }
 .hero-particles span{
   position:absolute;display:block;
   width:4px;height:4px;
   background:rgba(212,161,75,0.1);
   border-radius:50%;
   animation:particleFloat linear infinite;
 }
 .hero-particles span:nth-child(1){left:10%;top:20%;width:3px;height:3px;animation-duration:18s;animation-delay:0s}
 .hero-particles span:nth-child(2){left:25%;top:60%;width:5px;height:5px;animation-duration:22s;animation-delay:2s}
 .hero-particles span:nth-child(3){left:45%;top:30%;width:3px;height:3px;animation-duration:16s;animation-delay:4s}
 .hero-particles span:nth-child(4){left:65%;top:70%;width:4px;height:4px;animation-duration:20s;animation-delay:1s}
 .hero-particles span:nth-child(5){left:80%;top:25%;width:3px;height:3px;animation-duration:24s;animation-delay:3s}
 .hero-particles span:nth-child(6){left:90%;top:55%;width:5px;height:5px;animation-duration:19s;animation-delay:5s}
 .hero-particles span:nth-child(7){left:35%;top:80%;width:3px;height:3px;animation-duration:21s;animation-delay:2.5s}
 .hero-particles span:nth-child(8){left:55%;top:15%;width:4px;height:4px;animation-duration:17s;animation-delay:3.5s}
 .hero-overlay{
   position:absolute;bottom:0;left:0;right:0;height:120px;
   background:linear-gradient(to top, var(--color-bg) 0%, transparent 100%);
   z-index:1;
 }
 .hero-content{
   position:relative;z-index:2;
   padding:0 24px;
   max-width:640px;
 }
 .hero-content h1{
   font-size:3.6rem;font-weight:700;
   margin-bottom:10px;
   text-shadow:0 4px 30px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3);
   letter-spacing:0.08em;
   opacity:0;transform:translateY(24px);
   animation:heroReveal 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards;
 }
 .hero-content p{
   font-size:1.1rem;font-weight:400;
   opacity:0;letter-spacing:0.1em;
   margin-bottom:28px;
   color:rgba(255,255,255,0.8);
   transform:translateY(16px);
   animation:heroReveal 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s forwards;
 }
 .hero-badge{
   display:inline-flex;align-items:center;gap:8px;
   padding:8px 22px;
   border:1px solid rgba(255,255,255,0.2);
   border-radius:100px;
   font-size:0.8rem;font-weight:400;letter-spacing:0.04em;
   color:rgba(255,255,255,0.85);
   backdrop-filter:blur(8px);
   background:rgba(255,255,255,0.08);
   opacity:0;transform:translateY(12px);
   animation:heroReveal 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards;
 }
 .hero-badge svg{opacity:0.7}
 .hero-divider{
   width:60px;height:2px;
   background:linear-gradient(90deg, var(--color-amber), var(--color-gold), var(--color-accent));
   margin:14px auto 18px;
   border-radius:1px;
   opacity:0;
   animation:heroReveal 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s forwards;
 }
 @media(max-width:768px){
   .hero{height:380px}
   .hero-content h1{font-size:2.4rem}
   .hero-content p{font-size:0.95rem}
 }
 </style>
