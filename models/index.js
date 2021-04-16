const User = require('./User');
const Post = require("./Post");
const Comment = require('./Comment');



//associations
User.hasMany(Post, {
    foreignKey: 'user_id',
    foreignKeyConstraint: true, 
    onDelete: 'SET NULL', 
    onUpdate:  'SET NULL' 
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    foreignKeyConstraint: true, 
    onDelete: 'SET NULL', 
    onUpdate:  'SET NULL' 
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    foreignKeyConstraint: true, 
    onDelete: 'cascade' 
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    foreignKeyConstraint: true, 
    onDelete: 'cascade' 
});

User.hasMany(Comment, {
    foreignKey: 'user_id', 
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

module.exports = { User }; 