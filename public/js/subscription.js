const newSubscriptionHandler = async (event) => {
    event.preventDefault();
  
    const newSubscriptionName = document.querySelector('#Subscription_name').value.trim();
    
    if (newSubscriptionName) {
      const response = await fetch(`/api/subscription`, {
        method: 'POST',
        body: JSON.stringify({ newSubscriptionName }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/subscription');
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
        document.location.replace('/subscription');
      } else {
        alert('Failed to delete subscription');
      }
    }
  };
  
  document
    .querySelector('#addBtn')
    .addEventListener('submit', newSubscriptionHandler);

  document
    .querySelector('#updateBtn')
    .addEventListener('click', updateButtonHandler);
  
  document
    .querySelector('#deleteBtn')
    .addEventListener('click', delButtonHandler);