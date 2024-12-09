<?php
include 'conexao.php';

$sql = "SELECT * FROM produtos";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<div>";
        echo "<h2>" . $row['nome'] . "</h2>";
        echo "<p>" . $row['descricao'] . "</p>";
        echo "<p>R$ " . number_format($row['preco'], 2, ',', '.') . "</p>";
        echo "</div>";
    }
} else {
    echo "Nenhum produto encontrado.";
}

$conn->close();
?>