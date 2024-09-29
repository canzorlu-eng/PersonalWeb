const express = require('express');
const path = require('path');
const app = express();

// Statik dosya sunucu
app.use(express.static(path.join(__dirname, 'public')));

// Diğer rotalar için 404 hatası döndürme
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Sunucuyu başlatma
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
