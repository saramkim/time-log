self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        if (clientList.length) {
          clientList[0].focus();
        }
      })
      .then(event.notification.close())
  );
});
