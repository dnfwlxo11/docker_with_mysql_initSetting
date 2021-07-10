module.exports = {
    selectContents() {
        const sql = [];
        
        sql.push('SELECT ');
        sql.push('* ');
        sql.push('FROM ');
        sql.push('BOARD');

        console.log(sql.join(''));
        return sql.join('');
    },

    selectContent(params) {
        const sql = [];
        
        sql.push('SELECT ');
        sql.push('* ');
        sql.push('FROM ');
        sql.push('BOARD ');
        sql.push('WHERE ');
        sql.push('bid= ');
        sql.push(`${params.bid}`);

        console.log(sql.join(''));
        return sql.join('');
    },

    insertContent(params) {
        const sql = [];
        
        sql.push('INSERT ');
        sql.push('INTO ');
        sql.push('BOARD( ');
        sql.push('USER, ');
        sql.push('TITLE, ');
        sql.push('CONTENT, ');
        sql.push('PASS, ');
        sql.push('_DATE) ');
        sql.push('VALUES (');
        sql.push(`"${params.user}", `);
        sql.push(`"${params.title}", `);
        sql.push(`"${params.content}", `);
        sql.push(`SHA2(${params.pass}, 256), `);
        sql.push('DEFAULT)');

        console.log(sql.join(''));
        return sql.join('');
    },

    deleteContent(params) {
        const sql = [];
        
        sql.push('DELETE ');
        sql.push('FROM ');
        sql.push('BOARD ');
        sql.push('WHERE ');
        sql.push('bid= ');
        sql.push(`${params.bid}`);

        console.log(sql.join(''));
        return sql.join('');
    }
}