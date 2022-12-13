const newSubscriptionHandler = async (event) => {
    event.preventDefault();
  
    const subscription_name = document.querySelector('#subscription-name').value.trim();
    const price = document.querySelector('#subscription-price').value.trim();
    
    if (subscription_name && price) {
      const response = await fetch(`/api/subscription`, {
        method: 'POST',
        body: JSON.stringify({ subscription_name, price }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create subscription');
      }
    }
  };

  const updateButtonHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/subscription/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ price:newSubscriptionPrice }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/subscription');
    } else {
      alert('Failed to update subscription price');
    }
  }

  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/subscription/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete subscription');
      }
    }
  };
  
  document
    .querySelector('.new-subscription')
    .addEventListener('submit', newSubscriptionHandler);

  document
    .querySelector('#updateBtn')
    .addEventListener('click', updateButtonHandler);
  
  document
    .querySelector('#deleteBtn')
    .addEventListener('click', delButtonHandler);