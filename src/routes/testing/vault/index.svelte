<script lang="ts">
  import { totp } from "otplib";

  let secret = "KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD";
  let token = totp.generate(secret);
  let valid = totp.check(token, secret);
  let x = 0;

  setInterval(() => {
    x++;
    token = totp.generate(secret);
  }, 1000);

  export const hydrate = true;
</script>

<h1>Vault</h1>

{x}

{token}

{valid}

<button
    on:click={() => {
        x++;
    }}
>
    click
</button>
