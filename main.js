$(document).ready(function() {
    // Função para adicionar tarefa ao submeter o formulário
    $('#taskForm').submit(function(event) {
        event.preventDefault(); // Evitar o comportamento padrão do formulário
        const taskName = $('#taskName').val();
        if (taskName.trim() !== '') {
            // Adicionar a tarefa à lista
            $('#taskList').append('<li>' + taskName + '</li>');
            $('#taskName').val(''); // Limpar o campo de entrada
        }
    });

    // Adicionar efeito de linha ao clicar nos itens da lista
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
