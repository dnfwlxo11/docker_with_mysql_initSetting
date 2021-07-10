module.exports = {
    selectComments() {
        const sql = [];
        
        sql.push('SELECT ');
        sql.push('* ');
        sql.push('FROM ');
        sql.push('COMMENTS');
    
        console.log(sql.join(''));
        return sql.join('');
    },
    
    insertComment(params) {
        const sql = [];
        
        sql.push('INSERT ');
        sql.push('INTO ');
        sql.push('COMMENTS( ');
        sql.push('USER, ');
        sql.push('COMMENT, ');
        sql.push('PASS, ');
        sql.push('_DATE, ');
        sql.push('BID) ');
        sql.push('VALUES (');
        sql.push(`"${params.user}", `);
        sql.push(`"${params.comment}", `);
        sql.push(`SHA2(${params.pass}, 256), `);
        sql.push('DEFAULT, ');
        sql.push(`${params.bid})`);
        
        console.log(sql.join(''));
        return sql.join('');
    },
    
    deleteComment(params) {
        const sql = [];
        
        sql.push('DELETE ');
        sql.push('FROM ');
        sql.push('COMMENTS ');
        sql.push('WHERE ');
        sql.push('cid= ');
        sql.push(`${params.cid}`);
    
        console.log(sql.join(''));
        return sql.join('');
    }
}