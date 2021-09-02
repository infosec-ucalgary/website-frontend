<template>
    <section class="text-center md:w-2/3 mx-auto">
    <div class="text-center md:w-2/3 mx-auto font-display text-4xl">Recent News in Information Security</div>
    <br>
    <div class="mx-auto break-all grid grid-cols-2 gap-x-6 gap-y-3">
        <NewsComponent title="Google Awards Over $130,000 for Flaws Patched With Release of Chrome 93" source="Security Week" date="09/01/2021" path="https://www.securityweek.com/google-awards-over-130000-flaws-patched-release-chrome-93" />
        <NewsComponent title="LockFile Ransomware Uses Never-Before Seen Encryption to Avoid Detection" source="Threatpost" date="08/31/2021" path="https://threatpost.com/lockfile-ransomware-avoid-detection/169042/" />
        <NewsComponent title="WooCommerce Pricing Plugin Allows Malicious Code-Injection" source="Threatpost" date="08/31/2021" path="https://threatpost.com/woocommerce-plugin-malicious/169063/?web_view=true" />
        <NewsComponent title="Coin Miners Pose Biggest Threat to Linux Cloud Environments" source="Cyware Social" date="08/31/2021" path="https://cyware.com/news/coin-miners-pose-biggest-threat-to-linux-cloud-environments-dfc490d5" />
        <NewsComponent title="An Extensive Look into Gaming-related Cyberthreats" source="Cyware Social" date="08/31/2021" path="https://cyware.com/news/an-extensive-look-into-gaming-related-cyberthreats-e0a2fdde" />
        <NewsComponent title="CISA Adds Single-Factor Authentication to the List of Bad Practices" source="The Hacker News" date="08/30/2021" path="https://thehackernews.com/2021/08/cisa-adds-single-factor-authentication.html" />
        <NewsComponent title="New Vulnerability Allow Hackers to Bypass PIN Codes on Contactless Cards From Mastercard & Maestro" source="Cyber Security News" date="08/30/2021" path="https://cybersecuritynews.com/new-vulnerability-in-mastercard-maestro/" />
        <NewsComponent title="A look into the tactics of a ransomware affiliate from the FBI" source="IT World Canada." date="08/25/2021" path="https://www.itworldcanada.com/article/cyber-security-today-aug-25-2021-a-warning-to-users-of-microsoft-power-apps-vulnerabilities-in-a-medical-pump-and-more/457493" />
    </div>
    </section>
</template>

<script>
import NewsComponent from '@/components/NewsComponent.vue'

export default {
  name: 'news',
  components: {
    NewsComponent
  }
}
</script>
