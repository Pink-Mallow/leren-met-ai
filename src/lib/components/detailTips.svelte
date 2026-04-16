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

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    border-radius: 0.15rem;
    box-shadow: 0.375rem 0.375rem 1.25rem oklch(0.59 0.32 308.6 / 0.09);
    width: clamp(280px, 80%, 650px);
    height: clamp(225px, 50%, 550px);
    justify-content: center;
    align-self: center;
    padding: 1.25rem;
  }
  label {
    font-weight: bold;
    color: oklch(31.317% 0.00004 271.152);
  }
  textarea {
    resize: vertical;
    min-height: 6.25rem;
    padding: 0.625rem;
    font-size: 1rem;
    field-sizing: content;
    resize: none;
    min-height: 4rem;
    max-height: fit-content;
    border-radius: 0.15rem;
    border: 1px solid oklch(22.046% 0.10757 312.575);
  }
  button {
    align-self: flex-start;
    padding: 0.625rem 1.25rem;
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 0.313rem;
    cursor: pointer;
    size: clamp(0.875rem, 1vw, 1.25rem);
  }
  button:hover {
    background-color: var(--color-primary-dark);
  }
</style>