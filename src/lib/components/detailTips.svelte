<!-- to send tips to the API in serrverside-->
<script>
    export let method; 
</script>
 <!-- the form where users can submit tips for the method -->
<h3>Tips</h3>
<form method="post" action="?/addTip" >
  <label for="tips">
    Scrijf een tip voor deze methode:
  </label>
  <input type="hidden" name="methodId" value="{method.id}">
  <textarea name="tips" id="tips" maxlength="500" minlength="20"></textarea>
  <button type="submit">Versturen</button>
</form>