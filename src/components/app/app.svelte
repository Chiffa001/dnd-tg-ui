<script lang="ts">
  import Button from '../ui/button';
  import PhoneMask from '../ui/phone-mask';
  import Modal from '../ui/modal';

  let isModalOpen = $state(false);

  const toggleModalHandler = () => {
    isModalOpen = !isModalOpen;
  };
</script>

<PhoneMask>
  <Button variant="primary" onClick={toggleModalHandler}>Ok</Button>
  <Modal isOpen={isModalOpen} onClose={toggleModalHandler} hasCloser>Modal</Modal>
</PhoneMask>
