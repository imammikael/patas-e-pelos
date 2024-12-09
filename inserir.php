<?php
include 'conexao.php';

$nome = 'Brinquedo para cachorro';
$descricao = 'Um brinquedo divertido para seu pet';
$preco = 29.90;

$sql = "INSERT INTO produtos (nome, descricao, preco) VALUES ('$nome', '$descricao', $preco)";

if ($conn->query($sql) === TRUE) {
    echo "Produto adicionado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>